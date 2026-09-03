// Search properties

function searchProperties() {

    const location =
        document.getElementById("location").value
        .toLowerCase()
        .trim();

    const type =
        document.getElementById("propertyType").value;

    const maxRent =
        document.getElementById("maxRent").value;

    const properties =
        document.querySelectorAll(".property-card");

    let found = 0;

    properties.forEach(function(property) {

        const propertyLocation =
            property.dataset.location.toLowerCase();

        const propertyType =
            property.dataset.type;

        const propertyRent =
            Number(property.dataset.rent);

        const locationMatch =
            location === "" ||
            propertyLocation.includes(location);

        const typeMatch =
            type === "" ||
            propertyType === type;

        const rentMatch =
            maxRent === "" ||
            propertyRent <= Number(maxRent);

        if (locationMatch && typeMatch && rentMatch) {

            property.style.display = "block";
            found++;

        } else {

            property.style.display = "none";

        }

    });


    const noResults =
        document.getElementById("noResults");

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    document.getElementById("properties")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Favorite button

function toggleFavorite(button) {

    if (button.innerHTML === "♡") {

        button.innerHTML = "♥";
        button.style.color = "#e63946";

    } else {

        button.innerHTML = "♡";
        button.style.color = "#222";

    }
}


// Contact owner

function contactOwner(propertyName) {

    alert(
        "Thank you for your interest in " +
        propertyName +
        "!\n\nOwner contact feature will be added in the next version."
    );
}


// List property

function showMessage() {

    alert(
        "Property listing feature coming soon!\n\n" +
        "In the next version, owners will be able to add their properties."
    );
}


// View all

function showAllProperties() {

    const properties =
        document.querySelectorAll(".property-card");

    properties.forEach(function(property) {
        property.style.display = "block";
    });

    document.getElementById("noResults")
        .style.display = "none";
}
