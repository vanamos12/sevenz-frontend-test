<template>
    <div class="wrapper-pop-up">
        <div class="main">
            <div class="header">
                <h2>Infos</h2>
            </div>
            <p>{{message}}</p> 
            <div class="submit-button"> 
                <button class="btn" @click.prevent="$emit('close')">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        message: String
    }
}
</script>

<style scoped>
    .wrapper-pop-up{
        width: 100vm;
        height: 100vh;
        background-color: rgba(157, 150, 150, 0.4);
        z-index: 10;
        display: grid;
        place-items: center;
    }

    .header h2{
        color: var(--text-h3-color);
        font-size: 18px;
        font-weight: bold;
    }

    .header, .main p{
        margin-bottom: 1rem;
    }

    .main{
        width: 400px;
        height: 400px;
        padding: 1rem;
        background-color: var(--bg-main-color);
    }

    .submit-button{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .submit-button .btn{
        color: white;
        background-color: var(--bg-side-menu-color);
        padding: 10px;
        font-weight: bold;
    }
</style>
