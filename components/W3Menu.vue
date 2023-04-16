<template>
    <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" v-on:click="myFunction">
            <i class="fa fa-bars"></i>
        </a>
    </div>
</template>


<!-- component script -->
<script>
export default {
    /* passed props */
    props: {
    },
    /*     data: () => ({
        }), */
    /* js code */
    mounted() {
        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

    },
    methods: {
        myFunction: function (event) {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    }
}
</script>

<!-- component style -->
<style lang="scss">
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
    background-color: #04AA6D;
    color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
    display: none;
}
</style>