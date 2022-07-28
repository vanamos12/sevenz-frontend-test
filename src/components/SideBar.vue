<template>
    <div id="side-bar">
        <div id="menu">
            <div class="menu-item active">
                <i class="bx bxs-dashboard"></i> <span>Dashboard</span>
            </div>
            <div class="menu-item">
                <i class="bx bxs-user" ></i><span>Profile</span>
            </div>
            <div class="menu-item-special">
                <div> 
                    <i class="bx bxl-dropbox" ></i><span>Services</span>
                </div>
                <i class="bx bx-chevron-down" ></i>
            </div>
            <div class="menu-item">
                <i class="bx bxs-rectangle" ></i><span>Medical Records</span>
            </div>
            <div class="menu-item">
                <i class="bx bxs-wallet" ></i><span>Care Wallet</span>
            </div>
            <div class="menu-item">
                <i class="bx bxs-message" ></i><span>Messages</span>
            </div>
            <div class="menu-item">
                <i class="bx bxs-book-alt" ></i><span>Resources</span>
            </div>
            <hr />
            <div class="menu-item">
                <i class="bx bxs-color" ></i><span>Account Settings</span>
            </div>
            <div class="menu-item">
                <i class='bx bx-support' ></i><span>Contact Support</span>
            </div>
            <div class="menu-item">
                <i class="bx bxs-log-out" ></i><span>Logout</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
#side-bar{
    width: 300px;
    padding-top: 80px;
}

#menu{
    color: var(--text-side-color);
}

.menu-item{
    width:100%;
    display: flex;
    padding: 10px 8%;
    align-items: center;
}


.menu-item-special{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 8%;
}
i{
    transform: scale(1.25);
}
.menu-item i{
    margin-right: 15px;
}

.menu-item-special div i{
    margin-right: 15px;
}

.menu-item.active{
    color:white;
    background-color: var(--bg-side-menu-color);

}
.bx-chevron-down{
    text-align: right;
}
</style>
