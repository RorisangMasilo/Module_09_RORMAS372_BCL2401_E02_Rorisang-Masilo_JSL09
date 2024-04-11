fetch(
  "https://unsplash.com/photos/brown-rocky-mountain-beside-sea-during-daytime--7ZwuyDx2rI?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
)
  .then((res) => res.json())
  .then((date) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  });
