 document.getElementById("user_input_form").addEventListener("submit", (e) =>{
    e.preventDefault

    const destination = document.getElementById("destination_input").value

    const location = document.getElementById("location_input").value

    let photoUrl = document.getElementById("photo_url_input").value
    if(photoUrl === ""){
        photoUrl = "https://www.researchgate.net/profile/Ahmed-Mohmed-2/post/Why_do_we_need_a_vacation_How_often_do_you_need_a_vacationWhat_are_the_benefits_of_vacationsDo_vacations_make_you_happier/attachment/5e079b76cfe4a777d4fedc26/AS%3A841148566339584%401577556854285/image/vacation-final.jpg"
    }

    const description = document.getElementById("description_input").value
 });



document.getElementById("user_input_form").reset()