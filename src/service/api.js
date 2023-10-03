import axios from "axios";

export const fetchPhoto = async (searchPhoto, page) => {
	const url = "https://pixabay.com/api/";
	const apiKey = "38868340-f331cc79d6b60576f7cfbf452";

	const params = new URLSearchParams({
		page: page,
		per_page: 12,
		q: searchPhoto,
		image_type: 'photo',
		orientation: 'horizontal',
		safesearch: true,
	});
	const { data } = await axios.get(`${url}?key=${apiKey}`, { params })
	return (data);
}