import { Controller } from 'lux-framework';

class UsersController extends Controller {
  params = [
    'name',
    'age'
  ];
}

export default UsersController;
