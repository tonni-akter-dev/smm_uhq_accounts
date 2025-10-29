import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';

interface AddMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: FormData) => void;
}

export function AddMessageModal({ isOpen, onClose, onSave }: AddMessageModalProps) {
  const [title, setTitle] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [targetAudience, setTargetAudience] = React.useState('All Users / Custom Roles / Select Users');
  const [usernamesEmails, setUsernamesEmails] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('instagram', instagram);
    formData.append('message', message);
    formData.append('targetAudience', targetAudience);
    formData.append('usernamesEmails', usernamesEmails);
    onSave(formData);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-gradient-to-b from-purple-950/80 to-black/80 border border-white/10 text-gray-200 rounded-xl shadow-2xl"
        >
          <CardHeader className="relative pb-2">
            <Typography variant="h5" className="text-purple-300 font-semibold">
              Add New Message
            </Typography>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder="Enter title"
                />
              </div>

              {/* Instagram */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Instagram</label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder="Enter Instagram details"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter message..."
                  rows={3}
                  className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>

              {/* Target Audience */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Target Audience</label>
                <select
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                >
                  <option value="All Users / Custom Roles / Select Users">All Users / Custom Roles / Select Users</option>
                  <option value="All Users">All Users</option>
                  <option value="Custom Roles">Custom Roles</option>
                  <option value="Select Users">Select Users</option>
                </select>
              </div>

              {/* Username/Emails */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Username/Emails</label>
                <input
                  type="text"
                  value={usernamesEmails}
                  onChange={(e) => setUsernamesEmails(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder="Enter usernames/emails"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end pt-2 space-x-4">
                <Button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-700 hover:bg-gray-800 text-white rounded-md px-6 py-2 font-medium transition"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
                >
                  Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}