import { build, sequence, fake } from '@jackfranklin/test-data-bot';

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    avatar: string;
    address: string;
    dob: string;
}

export const userBuilder = build<User>('User', {
    fields: {
        id: sequence(id => `user-${id}`),
        name: fake(f => f.name.findName()),
        email: fake(f => f.internet.email()),
        title: fake(f => f.name.title()),
        avatar: fake(f => f.random.image()),
        address: fake(f => f.address.country()),
        dob: fake(f => f.date.past()),
    },
});