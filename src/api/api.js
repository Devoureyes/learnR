import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'ff561da7-3ea5-4ca0-b674-21db66fafbf3'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const AuthAPI = {
    me() {
        return instance.get('auth/me').then(r => { return r.data; });
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
};
export const profileAPI = {
    setUserPhoto(payload) {
        let formData = new FormData()
        formData.append('image',payload)
        return instance.put('profile/photo',formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(payload) {
        return instance.put('profile',payload)
    },
    getProfile(userId) {
        return instance.get('profile/' + userId).then(r => { return r.data; });
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    }
};
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    follow(id) {
        return instance.post('follow/' + id, {});
    },
    unFollow(id) {
        return instance.delete('follow/' + id);
    }
};
export const lessonAPI = {
    search(query) {
        return fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
            method: 'GET',
            mode: 'cors',
        });
        // .then(response => response.json())
        // .then(shows => shows.map(show => show.show))
    },
    show(showId) {
        return fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
            method: 'GET',
            mode: 'cors',
        });
    }
};
function form(data) {
    const formBody = [];
    for (let property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join("&")
}
export const ldialogsAPI = {
    getDialog(data) {
        const body = form(data);
        return fetch('http://localhost:3001/api/dialogs/dialog', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body
        });
    },
    getUsers(data) {
        const body = form(data);
        return fetch('http://localhost:3001/api/dialogs', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body
        });
    },
    getAuth(data) {
        const body = form(data);
        return fetch('http://localhost:3001/api/auth',{
            method: 'POST',
            mode: 'cors',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body,
        })
    },
    sendMessage(data) {
        return fetch('http://localhost:3001/api/dialogs/sendMessage/',{
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
        })
    }
}


const github = axios.create({
    baseURL: 'https://api.github.com/'
});
export const setTokenApi = access_token => {
    github.defaults.params = {access_token};
};
export const clearTokenApi = () => {
    github.defaults.params = {access_token: undefined};
};
export const githubAPI = {
    getUserInformation(login) {
        return github(`users/${login}`);
    },
    getUserFollowers(login,page,per_page) {
        return github(`users/${login}/followers?pages=${page}&per_page=${per_page}`);
    },
    getUserRepos(login) {
        return github(`users/${login}/repos`);
    },
    getTokenOwner() {
        return github('user');
    }
};

