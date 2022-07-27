<template>
    <div id="main">
        <div class="row-right">
            <div id="header">
                <h3>Take a tour</h3>
                <i class='bx bxs-notification' ></i>
                <i class='bx bxs-bell' ></i>
                <img alt="profile" src="./../assets/profile.png" />
            </div>
        </div>
        <div class="row-title">
            <h1>Update Patient Medical Record</h1>
            <h2>Click the tabs to view and edit patient medical details</h2>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>  
#main{
    width: 900px;
    background-color: var(--bg-main-color);
    padding: 0 2rem;
}
.row-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#header{
    display: flex;
    align-items: center;
    gap: 2rem;
}

h3{
    color: var(--text-h3-color);
    font-size: 18px;

}

img{
    width: 50px;
    border-radius: 50%;
}

i{
    transform: scale(1.5);
}

i.bxs-bell{
    color: var(--text-h3-color);
}

i.bxs-notification{
    color: var(--bg-side-menu-color);
}

h1{
    font-size: 25px;
    font-weight: 900;
    color: var(--bg-side-menu-color);
}

h2{
    font-size: 12px;
    color: var(--text-h2-color);
}
</style>