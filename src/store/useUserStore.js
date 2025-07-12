import { create } from 'zustand';

export default useUserStore = create((set) => ({
               users: [],
                addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: uuidv4() }],
    })),

    //editing user
 editUser: (userId, newUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    })),


}));

