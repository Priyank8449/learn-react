import style from './css/uprofile.module.css'

function UserProfile() {
    return (
        <div>
            <h1 className={style.heading}> user profile</h1>
            <div className={style.card}>
                <img src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
                <div>
                    <h3>italy la raj kumar</h3>
                    <p>melody  ka awedh pati</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile