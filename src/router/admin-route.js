import Index from '../pages/Admin/Admin-Index';
import Products from '../pages/Admin/Products';
import New from '../pages/Admin/New';
import Edit from '../pages/Admin/Edit';

export default {
  // admin route
  path: '/admin',
  component: Index,
  children: [
    // default
    {
      path: '',
      name: 'Products',
      component: Products,
    },
    {
      path: 'new',
      name: 'New',
      component: New,
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit,
    },
  ],
}
