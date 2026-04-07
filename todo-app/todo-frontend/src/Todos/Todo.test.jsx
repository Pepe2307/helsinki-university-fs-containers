import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import Todo from './Todo'

describe('Todo component', () => {
  const mockDelete = vi.fn()
  const mockComplete = vi.fn()

  it('renders todo text', () => {
    const todo = { _id: '1', text: 'Test todo', done: false }
    render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />)
    expect(screen.getByText('Test todo')).toBeInTheDocument()
  })

  it('shows done info when todo is done', () => {
    const todo = { _id: '2', text: 'Done todo', done: true }
    render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />)
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
  })

  it('shows not done info when todo is not done', () => {
    const todo = { _id: '3', text: 'Not done todo', done: false }
    render(<Todo todo={todo} deleteTodo={mockDelete} completeTodo={mockComplete} />)
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })
})