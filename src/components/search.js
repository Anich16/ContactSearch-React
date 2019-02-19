import React from 'react';

let contacts = [
    {
        id: 1,
        name: "Harry Potter",
        phone: "+375294569586",
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto"
    },
    {
        id: 2,
        name: "Hermione Granger",
        phone: "+375445698745",
        img: "http://pm1.narvii.com/6622/c340b00e952c40d0bf75864541fdbfe4c835146a_00.jpg",
    },
    {
        id: 3,
        name: "Ronald Weasley",
        phone: "+375336985632",
        img: "https://images.immediate.co.uk/volatile/sites/3/2016/05/108890.jpg?quality=90&resize=620,413",
    },
    {
        id: 4,
        name: "Albus Dumbledore",
        phone: "+375298695210",
        img: "https://vignette.wikia.nocookie.net/characters/images/a/ac/Albus_Dumbledore.jpg/revision/latest?cb=20171118150857",
    },
    {
        id: 5,
        name: "Lord Voldemort",
        phone: "+375448521236",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
    },
    {
        id: 6,
        name: "Severus Snape",
        phone: "+375332012525",
        img: "http://pm1.narvii.com/6553/37c01b7b4b0f4c06bab85264f5f7b0c077b89c2a_00.jpg",
    },
    {
        id: 7,
        name: "Dobbi",
        phone: "+375446254520",
        img: "https://i.ytimg.com/vi/7JXEWAnE-Jw/maxresdefault.jpg",
    }
];



const handleSearch = (event) => {

    let contactsState = contacts;
    let displayedContacts = [];


    const searchQuery = event.target.value.toLowerCase();
        displayedContacts = contacts.filter((el) => {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });

       return contactsState = displayedContacts;
};

export default handleSearch;

// let getInitialState = () => {
//     let handleSearch = (event) => {
//         let searchQuery = event.target.value.toLowerCase();
//         let displayedContacts = contacts.filter((el) => {
//             let searchValue = el.name.toLowerCase();
//             return searchValue.indexOf(searchQuery) !== -1;
//         });
//         return {
//             displayedContacts: contacts
//         };
//     };