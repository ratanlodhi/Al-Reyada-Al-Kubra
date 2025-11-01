import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { supabase, ContactEnquiry } from '../lib/supabase';
import { LogOut, Mail, Phone, Calendar, Package } from 'lucide-react';

export default function Admin() {
  const { t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingNotes, setEditingNotes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchEnquiries();
    }
  }, [user]);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);
  };

  const fetchEnquiries = async () => {
    const { data, error } = await supabase
      .from('contact_enquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setEnquiries(data);
      const notes: { [key: string]: string } = {};
      data.forEach((e) => {
        notes[e.id] = e.notes || '';
      });
      setEditingNotes(notes);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      checkUser();
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setEnquiries([]);
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from('contact_enquiries').update({ status }).eq('id', id);
    fetchEnquiries();
  };

  const updateNotes = async (id: string) => {
    await supabase
      .from('contact_enquiries')
      .update({ notes: editingNotes[id] })
      .eq('id', id);
    fetchEnquiries();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-yellow-600/20 max-w-md w-full mx-4"
        >
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            {t('admin_login')}
          </h1>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                {t('admin_email')}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                {t('admin_password')}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 py-3 rounded-lg transition-all"
            >
              {t('admin_signin')}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{t('admin_title')}</h1>
            <p className="text-gray-400">{t('admin_subtitle')}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>{t('admin_signout')}</span>
          </button>
        </div>

        {enquiries.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-xl border border-yellow-600/20 text-center">
            <p className="text-gray-400 text-xl">{t('admin_empty')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {enquiries.map((enquiry) => (
              <motion.div
                key={enquiry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-600/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{enquiry.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span>{enquiry.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{enquiry.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                        <Package className="w-4 h-4" />
                        <span>{enquiry.service_type}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(enquiry.created_at).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-300 text-sm">{enquiry.message}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        {t('admin_status')}
                      </label>
                      <select
                        value={enquiry.status}
                        onChange={(e) => updateStatus(enquiry.id, e.target.value)}
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                      >
                        <option value="new">{t('admin_new')}</option>
                        <option value="contacted">{t('admin_contacted')}</option>
                        <option value="closed">{t('admin_closed')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        {t('admin_notes')}
                      </label>
                      <textarea
                        value={editingNotes[enquiry.id] || ''}
                        onChange={(e) =>
                          setEditingNotes({
                            ...editingNotes,
                            [enquiry.id]: e.target.value,
                          })
                        }
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                      ></textarea>
                      <button
                        onClick={() => updateNotes(enquiry.id)}
                        className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        {t('admin_save')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
