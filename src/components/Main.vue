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
}

#header{
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>