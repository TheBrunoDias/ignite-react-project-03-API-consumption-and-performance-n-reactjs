import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (ctx) => ctx.transactions,
  )

  const summary = transactions.reduce(
    (acc, transaction) => {
      const { price, type } = transaction

      if (type === 'income') {
        acc.income += price
        acc.total += price
      } else {
        acc.outcome += price
        acc.total -= price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
