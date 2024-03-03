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

window.onload = function() {

    // Gets the parameters in the query (ex: ?page=e) is stored as { "page": "e" }
    const queryParams = new URLSearchParams(window.location.search)
    var page = "";

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
    document.querySelector("#" + page).style.color = "#7552ba"
}