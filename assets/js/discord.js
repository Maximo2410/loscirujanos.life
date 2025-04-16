document.addEventListener('DOMContentLoaded', () => {
    const userId = "837149144476155905"; // Tu ID fijo
    const apiUrl = `https://discord-lookup-api-alpha.vercel.app/v1/user/${userId}`;

    // Elementos
    const profilePicture = document.getElementById('profile-picture');
    const usernameText = document.getElementById('username'); // NUEVO elemento

    // Fetch user data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data);

            // Set avatar
            const avatarUrl = data.avatar ? data.avatar.link : './assets/pfp/default.jpg';
            profilePicture.src = avatarUrl;

            // Mostrar nombre de usuario + tag
            if (usernameText) {
                const tag = data.discriminator && data.discriminator !== "0" ? `#${data.discriminator}` : "";
                usernameText.textContent = `${data.username}${tag}`;
}

        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});
