'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Search, ArrowDownToLine } from 'lucide-react';
import { AddProviderModal } from './AddProviderModal';
import SearchInput from '@/app/components/SearchInput';

// Define a proper interface for Provider
interface Provider {
  _id: string;
  name: string;
  apiurl: string;
  apikey?: string;
  balance: number;
  status: string;
  syncservices?: string;
}

// Mock data for providers
const mockProviders: Provider[] = [
  {
    _id: 'prov_001',
    name: 'OpenAI',
    apiurl: 'https://api.openai.com/v1',
    apikey: 'sk-***************************',
    balance: 125.5,
    status: 'Active',
    syncservices: 'gpt-3.5-turbo,gpt-4'
  },
  {
    _id: 'prov_002',
    name: 'Anthropic',
    apiurl: 'https://api.anthropic.com/v1',
    apikey: 'sk-ant-***************************',
    balance: 87.25,
    status: 'Active',
    syncservices: 'claude-3-opus,claude-3-sonnet'
  },
  {
    _id: 'prov_003',
    name: 'Google AI',
    apiurl: 'https://generativelanguage.googleapis.com/v1',
    apikey: 'AIza***************************',
    balance: 0.0,
    status: 'Inactive',
    syncservices: 'gemini-pro,gemini-pro-vision'
  },
  {
    _id: 'prov_004',
    name: 'Cohere',
    apiurl: 'https://api.cohere.ai/v1',
    apikey: '***************************',
    balance: 42.75,
    status: 'Active',
    syncservices: 'command,command-light'
  }
];

export function Providers() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [providers, setProviders] = React.useState<Provider[]>(mockProviders);

  const handleEdit = (id: string) => {
    console.log('Edit provider:', id);
    // In a real implementation, you would open an edit modal or navigate to an edit page
  };

  const handleDelete = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this provider?')) return;

    // Filter out the provider with the matching ID
    const updatedProviders = providers.filter((provider) => provider._id !== id);
    setProviders(updatedProviders);
    alert('✅ Provider deleted successfully!');
  };

  const handleExport = () => {
    // Create a JSON representation of the providers data
    const dataStr = JSON.stringify(providers, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    // Create a temporary link element and trigger download
    const exportFileDefaultName = 'providers.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // In a real implementation, you would refresh the data here
  };

  return (
    <div className='space-y-6 p-4 sm:p-6 lg:space-y-10 relative z-50 bg-gray-50 dark:bg-transparent min-h-screen'>
      <SearchInput />

      {/* Add Provider Button */}
      <div className='flex items-center justify-between mb-4'>
        <div></div>
        <div className='flex items-center space-x-2'>
          <button
            className='w-full sm:w-auto px-4 py-2 dark:bg-transparent bg-black border border-purple-600 rounded-full text-white'
            onClick={() => setIsModalOpen(true)}
          >
            + Add Provider
          </button>
        </div>
      </div>

      {/* Table */}
      <Card className='p-0 bg-white border border-gray-200 dark:border-gray-700 shadow-sm'>
        <div className='pt-6 flex justify-between px-4 mb-4'>
          <p className='text-xl text-black! dark:text-white!'>Providers</p>
          <button
            className='flex gap-3.5 items-center text-gray-700 dark:text-white  dark:hover:text-purple-400 transition-colors'
            onClick={handleExport}
          >
            Export <ArrowDownToLine className='h-3.5' />
          </button>
        </div>
        <div className='overflow-x-auto'>
          {providers.length === 0 ? (
            <div className='p-6 text-center text-gray-500 dark:text-gray-400'>
              No providers found
            </div>
          ) : (
            <table className='w-full'>
              <thead className='border-b border-gray-200 dark:bg-[#1C192A] dark:border-border'>
                <tr className='text-left'>
                  {['ID', 'Name', 'API URL', 'Balance', 'Status', 'Actions'].map((header) => (
                    <th
                      key={header}
                      className='px-6 py-4 text-sm font-medium text-gray-700 dark:text-white uppercase tracking-wider'
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-border'>
                {providers.map((provider) => (
                  <tr
                    key={provider._id}
                    className='hover:bg-gray-50 dark:hover:bg-accent/50 transition-colors'
                  >
                    <td className='px-6 py-4 whitespace-nowrap text-gray-600 dark:text-muted-foreground'>
                      {provider._id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-foreground'>
                      {provider.name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-600 dark:text-muted-foreground'>
                      {provider.apiurl}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-gray-600 dark:text-muted-foreground'>
                      ${provider.balance?.toFixed(2) ?? '0.00'}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Badge variant={provider.status === 'Active' ? 'default' : 'secondary'}>
                        {provider.status || 'Inactive'}
                      </Badge>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center space-x-0'>
                        <Button
                          variant='ghost'
                          size='icon'
                          onClick={() => handleEdit(provider._id)}
                          className='h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                        >
                          <Edit2 className='h-4 w-4' />
                        </Button>
                        <Button
                          variant='ghost'
                          size='icon'
                          onClick={() => handleDelete(provider._id)}
                          className='h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                        >
                          <Trash2 className='h-4 w-4' />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>

      {/* Add Provider Modal */}
      <AddProviderModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleCloseModal} />
    </div>
  );
}
