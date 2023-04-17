const transactionTypes = [
  {
    id: 1,
    name: 'Saque',
    flow: 'outcome',
    key: 'withdrawal',
  },
  {
    id: 2,
    name: 'Pagamento',
    flow: 'income',
    key: 'payment',
  },
  {
    id: 3,
    name: 'Reembolso',
    flow: 'outcome',
    key: 'refund',
  },
];

const findTransactionType = (type) => {
  if (!type) throw new Error('type must be provided');
  if (typeof type !== 'string' && typeof type !== 'number')
    throw new Error('type must be string or number');
  const parameter = typeof type === 'string' ? 'name' : 'id';
  return transactionTypes.find((s) => s[parameter] === type);
};

const findTransactionTypeByKey = (key) => {
  if (!key) throw new Error('key must be provided');
  if (typeof key !== 'string') throw new Error('key must be string');
  return transactionTypes.find((s) => s.key === key);
};

module.exports = {
  transactionTypes,
  findTransactionType,
  findTransactionTypeByKey,
};
