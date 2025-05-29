const users = [
    {
        profilepicture: 'https://www.usatoday.com/gcdn/presto/2022/09/15/USAT/c394604e-e009-4345-9ba2-789865e9e30e-newroger.jpg',
        name: 'Roger Federer',
        email: 'roderfederer@gmail.com'
    },
    {
        profilepicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbTezYange_PJP3KLcuf3kr6q_5uQtRt-IgMo9p8pvmC1gWMGF9-YcaAEGk4m7l95hzZkHfCcJQ5hMQrBU43CHg',
        name: 'Virat kohli',
        email: 'viratkohli@gmail.com'
    },
    {
        profilepicture: 'https://assets.goal.com/images/v3/blt2aaca933046f8b00/Cristiano%20Ronaldo%20Portugal%202024%20(4).jpg?auto=webp&format=pjpg&width=3840&quality=60',
        name: 'Cristiano ronaldo',
        email: 'cr7@gmail.com'
    },
    {
        profilepicture: 'https://imgs.search.brave.com/wNT_P0wUBBXDq_7L131mSy2uZP6HCR-UmZFRpIVqvFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNhLzdh/L2Y3LzNhN2FmNzQz/M2Y0NzVjN2UxZGFl/ZmIxZGFmNDhhYTll/LmpwZw',
        name: 'Michael Phelps',
        email: 'phelpswims@gmail.com'
    },
    {
        profilepicture: 'https://athlonsports.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_2514%2Cy_1461/MjE0NTI1NjQ5NTM5MzExMzk2/lebron-james.jpg',
        name: 'Lebron James',
        email: 'lebrondunks@gmail.com'
    }
];

let inputText = document.getElementById('searchUser');
let userContainer = document.getElementById('userContainer');

function renderusers(arr) {
    console.log("Rendering Users:", arr); // Debugging
    userContainer.innerHTML = ''; // Clear previous content
    arr.map(function (item) {
        let divelement = document.createElement('div');
        let profilepic = item.profilepicture;
        let name = item.name;
        let email = item.email;
        divelement.innerHTML = `
            <div class="userItem">
                <div class="userimage">
                    <img class="userimg" src="${profilepic}" alt="User Image">
                </div>
                <div class="user-text-container">
                    <h3 class="userName">${name}</h3>
                    <p class="emailid">${email}</p>
                </div>
            </div>`;
        userContainer.append(divelement);
    });
}

renderusers(users);

function handleSearch(input) {
    let searchText = input.target.value;
    console.log("Search Text:", searchText); // Debugging
    let filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchText.toLowerCase()) || 
               user.email.toLowerCase().includes(searchText.toLowerCase());
    });
    renderusers(filteredUsers);
}

inputText.addEventListener('input', handleSearch);