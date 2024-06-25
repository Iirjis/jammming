const Spotify = {
    async getToken() {
        let token = sessionStorage.getItem("token");
        let expireTime = Number(sessionStorage.getItem("expireTime"));

        if (!token || expireTime < new Date().getTime()) {
            var client_id = process.env.REACT_APP_CLIENT_ID;
    
            var redirect_uri = "https://spotimix.netlify.app/";
    
            var scope = "playlist-modify-public";
    
            var url = "https://accounts.spotify.com/authorize";
            url += "?response_type=token";
            url += "&client_id=" + client_id;
            url += "&scope=" + encodeURIComponent(scope);
            url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    
            window.location = url;
    
            token = window.location.href.match(/access_token=([^&]*)/)[1];
            const expiresIn =
                window.location.href.match(/expires_in=([^&]*)/)[1];
    
            expireTime = new Date().getTime() + Number(expiresIn) * 1000;
            sessionStorage.setItem("expireTime", expireTime.toString());
    
            sessionStorage.setItem("token", token);
        }
        return token;
    },

    async search(term) {
        try {
            const userToken = await this.getToken();
            const baseUrl = "https://api.spotify.com/v1/search?";
            const endpoint = `${baseUrl}q=${encodeURIComponent(
                term
            )}&type=track`;
            const response = await fetch(endpoint, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                const items = data.tracks.items;
                const finalArray = [];
                for (let item of items) {
                    let track = {};
                    track.name = item.name;
                    track.id = item.id;
                    track.album = item.album.name;
                    track.artist = item.artists[0].name;
                    track.previewUrl = item.preview_url;
                    finalArray.push(track);
                }
                return finalArray;
            }
        } catch (error) {
            console.log(`There was an error when searching: ${error}`);
            return [];
        }
    },
}

export default Spotify;