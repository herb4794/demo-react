import { Navigate } from "react-router-dom"
import List from "../components/List"
import Details from "../components/Details"
import Item from "../components/Item"

export default [
  {
    path: 'List',
    element: <List />

  },
  {
    path: 'Details',
    element: <Details />
  },

  {
    path: 'Item',
    element: <Item />
  },
  {
    path: '/',
    element: <Navigate to="List" />
  }

]