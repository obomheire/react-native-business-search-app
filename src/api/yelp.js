import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer RPMmekKZ3CgFATi8UXE8sntZeglzIkRrcHtLHXptbg7cTx3il3k9OJFkf_-tUtMSU2yukAkwn9i4KBj-faa-Kj7ZRzcaZ3VwWITC2bnl7FYFkyNYfNojS2GsvPYkYnYx'
    }
})




