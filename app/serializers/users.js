import { Serializer } from 'lux-framework';

class UsersSerializer extends Serializer {
  attributes = [
    'name',
    'age'
  ];
}

export default UsersSerializer;
