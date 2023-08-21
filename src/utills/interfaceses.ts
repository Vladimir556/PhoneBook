

export interface IModal {
  isOpen: boolean
  toggleModal: () => void
}

export interface IContact {
  name: string
  surname: string
  patronymic?: string
  phone?: string
  company?: string
  address?: string
  email?: string
}
