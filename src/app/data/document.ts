import { IHeaderTable } from '~/@types/index.d';

export const documentHeader: IHeaderTable[] = [
  {
    field: 'title',
    name: 'Title',
    width: 200,
    sortable: true
  },
  {
    field: 'document_type',
    name: 'Document Type',
    width: 200
  },
  {
    field: 'created_date',
    name: 'Creation Date',
    width: 100
  },
  {
    field: 'owner',
    name: 'Owner',
    width: 150
  },
  {
    field: 'comment',
    name: 'Comment'
  },

  {
    field: 'action',
    name: '',
    width: 20
  }
];

export const documentList = [
  {
    title: 'Document 1',
    document_type: 'Document',
    created_date: '2/2/2021',
    owner: 'Marilyn Siphron',
    comment: 'Comment 1'
  },
  {
    title: 'Document 2',
    document_type: 'Document',
    created_date: '2/2/2021',
    owner: 'Erin Franci',
    comment: 'Comment 2'
  },
  {
    title: 'Document 3',
    document_type: 'Document',
    created_date: '2/2/2021',
    owner: 'Alfonso Vetrovs',
    comment: 'Comment 3'
  }
];

export const documentActions = [
  {
    label: 'Download document',
    icon: 'file-download',
    actionKey: 'download',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];

export const letterActions = [
  {
    label: 'Send Letter',
    icon: 'send-02',
    actionKey: 'send',
    className: '--pointer mb-3'
  },
  {
    label: 'Print Letter',
    icon: 'printer',
    actionKey: 'send',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];

export const letterHeader: IHeaderTable[] = [
  {
    field: 'recipient',
    name: 'Recipient',
    width: 200,
    sortable: true
  },
  {
    field: 'subject',
    name: 'Subject'
  },
  {
    field: 'created_date',
    name: 'Creation Date',
    width: 100
  },
  {
    field: 'status',
    name: 'Status',
    width: 150
  },
  {
    field: 'content',
    name: 'Content'
  },

  {
    field: 'action',
    name: '',
    width: 20
  }
];

export const letterList = [
  {
    recipient: 'Marilyn Siphron',
    subject: 'Letter 1',
    created_date: '2/2/2021',
    status: 'sent',
    content: 'Content 1'
  },
  {
    recipient: 'Erin Franci',
    subject: 'Letter 2',
    created_date: '2/2/2021',
    status: 'sent',
    content: 'Content 2'
  },
  {
    recipient: 'Alfonso Vetrovs',
    subject: 'Letter 3',
    created_date: '2/2/2021',
    status: 'draft',
    content: 'Content 3'
  }
];
