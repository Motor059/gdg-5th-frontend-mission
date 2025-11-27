import {useState, useEffect} from 'react'

const Reqres = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://reqres.in/api/users?page=1', {
                    method: 'GET',
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                });
                if (!response.ok) {
                    throw new Error(`API 호출 실패 (${response.status})`);
                }
                const result = await response.json();
                console.log('가져온 데이터:', result.data);
                setUsers(result.data);
            } catch (error) {
                console.error('에러 발생:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div className="text-center mt-20"> 로딩 중 </div>;
    if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
        return (
            <div className="container mx-auto p-4 mt-10">
                <h2 className="font-bold mb-10 text-center text-2xl">회원 목록</h2>

                {users.length > 0 ? (
                    <div className="flex flex-wrap gap-6 justify-center">
                        {users.map((user)=> (
                            <div key={user.id} className="w-full max-w-[300px] border border-gray-200 rounded-[10px] p-6 shadow-md flex flex-col items-center bg-white">
                                <img src={user.avatar} alt="profile" className="w-24 h-24 rounded-full mb-4 object-cover" />
                                <h3 className="text-xl font-bold text-gray-800">{user.first_name} {user.last_name}</h3>
                                <p className="text-gray-500">{user.email}</p>
                            </div>
                        ))}
                    </div> 
                ) : (
                        <div className="text-center text-gray-500">데이터가 없습니다.</div> 
                    )}
            </div>
        );  
};

export default Reqres;