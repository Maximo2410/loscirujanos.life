document.addEventListener('DOMContentLoaded', () => {
    // Lista de perfiles (puedes modificar las IDs y los identificadores HTML a gusto)
    const profiles = [
        { id: "837149144476155905", imgId: "img1", usernameId: "username1" },
        { id: "941757673441988671", imgId: "img2", usernameId: "username2" },
        { id: "1215022068991660054", imgId: "img3", usernameId: "username3" },
        { id: "642610076632350721", imgId: "img4", usernameId: "username4" }
    ];

    profiles.forEach(profile => {
        const apiUrl = `https://discord-lookup-api-alpha.vercel.app/v1/user/${profile.id}`;

        const profilePicture = document.getElementById(profile.imgId);
        const usernameText = document.getElementById(profile.usernameId);

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(`API Response for ID ${profile.id}:`, data);

                // Set avatar
                const avatarUrl = data.avatar ? data.avatar.link : './assets/pfp/default.jpg';
                if (profilePicture) {
                    profilePicture.src = avatarUrl;
                }

                // Mostrar nombre de usuario + tag
                if (usernameText) {
                    const tag = data.discriminator && data.discriminator !== "0" ? `#${data.discriminator}` : "";
                    usernameText.textContent = `${data.username}${tag}`;
                }
            })
            .catch(error => {
                console.error(`Error fetching user data for ID ${profile.id}:`, error);
            });
    });
});