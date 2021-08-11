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
        })
            .then(response => response.json())
            .then(shows => shows.map(show => show.show));
    },
    show(showId) {
        return fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
            method: 'GET',
            mode: 'cors',
        }).then(response => response.json());
    }
};