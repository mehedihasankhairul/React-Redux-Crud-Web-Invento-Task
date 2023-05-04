import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-2xl font-bold text-center text-gray-700 p-2">Users CRUD with React-Redux</h1>
      <Routes >
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        {/* <Route path="/delete-user/:id" element={<DeleteUser />} /> */}
      </Routes>
    </div>
  );
}

export default App;
