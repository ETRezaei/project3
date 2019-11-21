import React from "react";

function InfoCards() {
    return (
        <div class="container">
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">Track your medications</h5>
                    <p class="card-text">MedBuddy provides you with a user-friendly weekly calendar system that allows you to input when you need to take your medications.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">View your medical history</h5>
                    <p class="card-text">MedBuddy keeps track of all the medications you have taken in a data table you can reference at any time.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
    )
}

export default InfoCards;