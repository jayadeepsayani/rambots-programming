var lessons = {
    "github-setup": "github_setup.html",
    "android-studio": "android_studio.html",
    "project-setup": "project_setup.html",
    "hardware-setup": "hardware_setup.html",
    "driver-hub-setup": "driver_hub_setup.html",
    "opmodes": "opmodes.html",
    "hello-world": "hello_world.html",
    "java": "java.html",
    "best-practices": "best_practices.html",
    "teleop": "teleop.html",
    "autonomous": "autonomous.html",
    "telemetry": "telemetry.html",
    "problem-solving": "problem_solving.html",
    "dpad": "dpad.html",
    "joystick": "joystick.html",
    "buttons": "buttons.html",
    "bumpers": "bumpers.html",
    "triggers": "triggers.html",
    "combos": "combos.html",
    "double-taps": "double_taps.html",
    "setting-up-motors": "setting_up_motors.html",
    "forward-and-backward": "forward_and_backward.html",
    "rotate": "rotate.html",
    "strafing": "strafing.html",
    "setting-up-servos": "setting_up_servos.html",
    "presets": "presets.html",
    "setting-up-sensors": "setting_up_sensors.html",
    "distance-sensor": "distance_sensor.html",
    "colordistance-sensor": "colordistance_sensor.html",
    "touch-sensor": "touch_sensor.html",
    "where-to-use-sensors": "where_to_use_sensors.html",
    "setting-up-webcams": "setting_up_webcams.html",
    "opencv": "opencv.html",
    "tensorflow": "tensorflow.html",
    "vuforia": "vuforia.html",
    "apriltags": "apriltags.html",
    "basic-movement": "basic_movement.html",
    "about-basic-movement": "about_basic_movement.html",
    "pros-basic": "pros_basic.html",
    "cons-basic": "cons_basic.html",
    "encoder-movement": "encoder_movement.html",
    "pros-encoders": "pros_encoders.html",
    "cons-encoders": "cons_encoders.html",
    "setting-up-roadrunner": "setting_up_roadrunner.html",
    "trajectories": "trajectories.html",
    "running-trajectories": "running_trajectories.html"
}

var navExpanded;
var expandButton;
var sidebar;
var darkMode;

window.onload = function() {

    // Gets the parameters in the query (ex: ?page=e) is stored as { "page": "e" }
    const queryParams = new URLSearchParams(window.location.search)
    var page = "";

    navExpanded = false;
    expandButton = document.querySelector(".expand");
    sidebar = document.querySelector(".doc-side");
    darkMode = localStorage.getItem("darkMode") === "true" ? true : false;

    // Since there is only a possibility of it being
    for(const value of queryParams.values()) {
        console.log(value);
        page = value;
    }
    
    if (lessons[page]  == undefined) page = "github-setup";

    fetch("lessons/" + lessons[page])
        .then(response => response.text())
        .then(data => {
            document.querySelector(".content").innerHTML = data;
            hljs.highlightAll();
        })
        .catch(error => console.error('Error fetching content:', error));   

    document.querySelector("#" + page).style.textDecoration = "underline";
    document.querySelector("#" + page).style.color = "#7552ba";  
    if (screen.width < 1350) {
        sidebar.style.transform = "translate(-400px, 0)";
    }  

    expandButton.onclick = function() {
        navExpanded = !navExpanded;

        if (navExpanded == false && screen.width < 1350) {
            sidebar.style.transform = "translate(-400px, 0)";
            expandButton.style.transform = "translate(0, 0)";
        } else if (navExpanded == true && screen.width < 1350) {
            sidebar.style.transform = "translate(0, 0)";
            expandButton.style.transform = "translate(400px, 0)";
        }
    };

    if (darkMode == false) {
        document.querySelector(".view-mode").innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.53 3.67386C10.3735 3.70204 10.1662 3.76462 9.80484 3.87607C6.33418 4.94645 3.81348 8.17984 3.81348 12C3.81348 16.6944 7.61906 20.5 12.3135 20.5C15.1538 20.5 17.6688 19.1077 19.2136 16.9649C19.4062 16.6977 19.5092 16.5525 19.5719 16.4371C19.6192 16.3503 19.6162 16.3284 19.6158 16.3254C19.6158 16.3252 19.6158 16.3251 19.6158 16.3251C19.6155 16.2776 19.5719 16.1795 19.5358 16.1432C19.5228 16.1365 19.4784 16.1175 19.3707 16.0957C19.1887 16.0589 18.9367 16.0334 18.524 15.9933C14.2517 15.5777 11.7822 14.0061 10.6361 11.8104C9.51389 9.66028 9.78163 7.13137 10.4714 5.0388C10.6285 4.5621 10.7289 4.25496 10.7812 4.02613C10.8134 3.88544 10.8153 3.82092 10.815 3.8016C10.7898 3.74658 10.7248 3.68284 10.6718 3.66306L10.9342 2.96044L10.6718 3.66306C10.6718 3.66305 10.6717 3.66303 10.6717 3.663C10.6709 3.66267 10.668 3.66136 10.6554 3.66086C10.6377 3.66015 10.6003 3.66122 10.53 3.67386ZM19.5402 16.1457C19.5401 16.1457 19.5393 16.1453 19.538 16.1443C19.5396 16.1452 19.5402 16.1457 19.5402 16.1457ZM10.2643 2.19759C10.5532 2.14558 10.8669 2.13474 11.1965 2.25782C11.6703 2.43473 12.0675 2.83967 12.2353 3.31679C12.3643 3.68377 12.3138 4.05303 12.2435 4.36062C12.1735 4.66649 12.0499 5.04126 11.907 5.47479L11.896 5.50836C11.2637 7.42658 11.1135 9.48312 11.9659 11.1163C12.7946 12.7039 14.6925 14.1135 18.6692 14.5003L18.7041 14.5037C19.0708 14.5393 19.4013 14.5715 19.6684 14.6255C19.9529 14.6832 20.2632 14.7827 20.5282 15.0182C20.8834 15.3338 21.1134 15.8425 21.1158 16.3177C21.1173 16.642 21.0214 16.9115 20.8897 17.1537C20.7759 17.363 20.615 17.5861 20.4511 17.8133L20.4303 17.8421C18.6158 20.3591 15.6563 22 12.3135 22C6.79063 22 2.31348 17.5229 2.31348 12C2.31348 7.50324 5.28101 3.70153 9.36277 2.44269C9.37466 2.43902 9.38652 2.43536 9.39836 2.43171C9.71138 2.33512 10.0071 2.24389 10.2643 2.19759Z" fill="white"/></svg>';
    } else if (darkMode == true) {
        document.querySelector(".view-mode").innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V5.18421C12.75 5.59842 12.4142 5.93421 12 5.93421C11.5858 5.93421 11.25 5.59842 11.25 5.18421V2.75C11.25 2.33579 11.5858 2 12 2ZM4.92868 4.92892C5.22157 4.63602 5.69645 4.63602 5.98934 4.92892L7.35704 6.29662C7.64993 6.58951 7.64993 7.06438 7.35704 7.35728C7.06415 7.65017 6.58927 7.65017 6.29638 7.35728L4.92868 5.98958C4.63579 5.69668 4.63579 5.22181 4.92868 4.92892ZM19.0704 4.92892C19.3633 5.22181 19.3633 5.69668 19.0704 5.98958L17.7027 7.35728C17.4098 7.65017 16.9349 7.65017 16.642 7.35728C16.3491 7.06438 16.3491 6.58951 16.642 6.29662L18.0097 4.92892C18.3026 4.63602 18.7775 4.63602 19.0704 4.92892ZM7.35526 12C7.35526 9.43478 9.43478 7.35526 12 7.35526C14.5652 7.35526 16.6447 9.43478 16.6447 12C16.6447 14.5652 14.5652 16.6447 12 16.6447C9.43478 16.6447 7.35526 14.5652 7.35526 12ZM12 8.85526C10.2632 8.85526 8.85526 10.2632 8.85526 12C8.85526 13.7368 10.2632 15.1447 12 15.1447C13.7368 15.1447 15.1447 13.7368 15.1447 12C15.1447 10.2632 13.7368 8.85526 12 8.85526ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H5.18421C5.59842 11.25 5.93421 11.5858 5.93421 12C5.93421 12.4142 5.59842 12.75 5.18421 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM18.0658 12C18.0658 11.5858 18.4016 11.25 18.8158 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H18.8158C18.4016 12.75 18.0658 12.4142 18.0658 12ZM16.6576 16.6571C16.9505 16.3642 17.4254 16.3642 17.7183 16.6571L19.0713 18.0102C19.3642 18.303 19.3642 18.7779 19.0713 19.0708C18.7784 19.3637 18.3035 19.3637 18.0106 19.0708L16.6576 17.7178C16.3647 17.4249 16.3647 16.95 16.6576 16.6571ZM7.34242 16.6574C7.63531 16.9503 7.63531 17.4251 7.34242 17.718L5.98939 19.071C5.6965 19.3639 5.22163 19.3639 4.92873 19.071C4.63584 18.7782 4.63584 18.3033 4.92873 18.0104L6.28176 16.6574C6.57465 16.3645 7.04953 16.3645 7.34242 16.6574ZM12 18.0658C12.4142 18.0658 12.75 18.4016 12.75 18.8158V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V18.8158C11.25 18.4016 11.5858 18.0658 12 18.0658Z" fill="white"/></svg>';
    }
    if (darkMode == true) {
        document.documentElement.style.setProperty('--background-color', '#1f1f21');
        document.documentElement.style.setProperty('--reg-text-color', '#fff');
        document.documentElement.style.setProperty('--nav-color', '#3b3c6b');
        document.documentElement.style.sc
    } else if (darkMode == false) {
        document.documentElement.style.setProperty('--background-color', '#f9f9fb');
        document.documentElement.style.setProperty('--reg-text-color', '#000');
        document.documentElement.style.setProperty('--nav-color', '#5F60A2');
    }

    if (darkMode == true) {
        document.getElementById('scrollcss').href = "darkscroll.css";
    } else {
        document.getElementById('scrollcss').href = "";
    }
    
    document.querySelector(".view-mode").onclick = function() {
        darkMode = !darkMode;
        localStorage.setItem('darkMode', darkMode);
        if (darkMode == false) {
            this.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.53 3.67386C10.3735 3.70204 10.1662 3.76462 9.80484 3.87607C6.33418 4.94645 3.81348 8.17984 3.81348 12C3.81348 16.6944 7.61906 20.5 12.3135 20.5C15.1538 20.5 17.6688 19.1077 19.2136 16.9649C19.4062 16.6977 19.5092 16.5525 19.5719 16.4371C19.6192 16.3503 19.6162 16.3284 19.6158 16.3254C19.6158 16.3252 19.6158 16.3251 19.6158 16.3251C19.6155 16.2776 19.5719 16.1795 19.5358 16.1432C19.5228 16.1365 19.4784 16.1175 19.3707 16.0957C19.1887 16.0589 18.9367 16.0334 18.524 15.9933C14.2517 15.5777 11.7822 14.0061 10.6361 11.8104C9.51389 9.66028 9.78163 7.13137 10.4714 5.0388C10.6285 4.5621 10.7289 4.25496 10.7812 4.02613C10.8134 3.88544 10.8153 3.82092 10.815 3.8016C10.7898 3.74658 10.7248 3.68284 10.6718 3.66306L10.9342 2.96044L10.6718 3.66306C10.6718 3.66305 10.6717 3.66303 10.6717 3.663C10.6709 3.66267 10.668 3.66136 10.6554 3.66086C10.6377 3.66015 10.6003 3.66122 10.53 3.67386ZM19.5402 16.1457C19.5401 16.1457 19.5393 16.1453 19.538 16.1443C19.5396 16.1452 19.5402 16.1457 19.5402 16.1457ZM10.2643 2.19759C10.5532 2.14558 10.8669 2.13474 11.1965 2.25782C11.6703 2.43473 12.0675 2.83967 12.2353 3.31679C12.3643 3.68377 12.3138 4.05303 12.2435 4.36062C12.1735 4.66649 12.0499 5.04126 11.907 5.47479L11.896 5.50836C11.2637 7.42658 11.1135 9.48312 11.9659 11.1163C12.7946 12.7039 14.6925 14.1135 18.6692 14.5003L18.7041 14.5037C19.0708 14.5393 19.4013 14.5715 19.6684 14.6255C19.9529 14.6832 20.2632 14.7827 20.5282 15.0182C20.8834 15.3338 21.1134 15.8425 21.1158 16.3177C21.1173 16.642 21.0214 16.9115 20.8897 17.1537C20.7759 17.363 20.615 17.5861 20.4511 17.8133L20.4303 17.8421C18.6158 20.3591 15.6563 22 12.3135 22C6.79063 22 2.31348 17.5229 2.31348 12C2.31348 7.50324 5.28101 3.70153 9.36277 2.44269C9.37466 2.43902 9.38652 2.43536 9.39836 2.43171C9.71138 2.33512 10.0071 2.24389 10.2643 2.19759Z" fill="white"/></svg>';
        } else if (darkMode == true) {
            this.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4142 2 12.75 2.33579 12.75 2.75V5.18421C12.75 5.59842 12.4142 5.93421 12 5.93421C11.5858 5.93421 11.25 5.59842 11.25 5.18421V2.75C11.25 2.33579 11.5858 2 12 2ZM4.92868 4.92892C5.22157 4.63602 5.69645 4.63602 5.98934 4.92892L7.35704 6.29662C7.64993 6.58951 7.64993 7.06438 7.35704 7.35728C7.06415 7.65017 6.58927 7.65017 6.29638 7.35728L4.92868 5.98958C4.63579 5.69668 4.63579 5.22181 4.92868 4.92892ZM19.0704 4.92892C19.3633 5.22181 19.3633 5.69668 19.0704 5.98958L17.7027 7.35728C17.4098 7.65017 16.9349 7.65017 16.642 7.35728C16.3491 7.06438 16.3491 6.58951 16.642 6.29662L18.0097 4.92892C18.3026 4.63602 18.7775 4.63602 19.0704 4.92892ZM7.35526 12C7.35526 9.43478 9.43478 7.35526 12 7.35526C14.5652 7.35526 16.6447 9.43478 16.6447 12C16.6447 14.5652 14.5652 16.6447 12 16.6447C9.43478 16.6447 7.35526 14.5652 7.35526 12ZM12 8.85526C10.2632 8.85526 8.85526 10.2632 8.85526 12C8.85526 13.7368 10.2632 15.1447 12 15.1447C13.7368 15.1447 15.1447 13.7368 15.1447 12C15.1447 10.2632 13.7368 8.85526 12 8.85526ZM2 12C2 11.5858 2.33579 11.25 2.75 11.25H5.18421C5.59842 11.25 5.93421 11.5858 5.93421 12C5.93421 12.4142 5.59842 12.75 5.18421 12.75H2.75C2.33579 12.75 2 12.4142 2 12ZM18.0658 12C18.0658 11.5858 18.4016 11.25 18.8158 11.25H21.25C21.6642 11.25 22 11.5858 22 12C22 12.4142 21.6642 12.75 21.25 12.75H18.8158C18.4016 12.75 18.0658 12.4142 18.0658 12ZM16.6576 16.6571C16.9505 16.3642 17.4254 16.3642 17.7183 16.6571L19.0713 18.0102C19.3642 18.303 19.3642 18.7779 19.0713 19.0708C18.7784 19.3637 18.3035 19.3637 18.0106 19.0708L16.6576 17.7178C16.3647 17.4249 16.3647 16.95 16.6576 16.6571ZM7.34242 16.6574C7.63531 16.9503 7.63531 17.4251 7.34242 17.718L5.98939 19.071C5.6965 19.3639 5.22163 19.3639 4.92873 19.071C4.63584 18.7782 4.63584 18.3033 4.92873 18.0104L6.28176 16.6574C6.57465 16.3645 7.04953 16.3645 7.34242 16.6574ZM12 18.0658C12.4142 18.0658 12.75 18.4016 12.75 18.8158V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V18.8158C11.25 18.4016 11.5858 18.0658 12 18.0658Z" fill="white"/></svg>';
        }
        if (darkMode == true) {
            document.documentElement.style.setProperty('--background-color', '#1f1f21');
            document.documentElement.style.setProperty('--reg-text-color', '#fff');
            document.documentElement.style.setProperty('--nav-color', '#3b3c6b');
            document.documentElement.style.sc
        } else if (darkMode == false) {
            document.documentElement.style.setProperty('--background-color', '#f9f9fb');
            document.documentElement.style.setProperty('--reg-text-color', '#000');
            document.documentElement.style.setProperty('--nav-color', '#5F60A2');
        }

        if (darkMode == true) {
            document.getElementById('scrollcss').href = "darkscroll.css";
        } else {
            document.getElementById('scrollcss').href = "";
        }
    }

    

}
