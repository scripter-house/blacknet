* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    min-height: 100%;
}

body {
    background: #050505;
    color: #eeeeee;
    font-family:
        Inter,
        Arial,
        Helvetica,
        sans-serif;
}

button {
    font-family: inherit;
}

.hidden {
    display: none !important;
}


/* LOGIN */

.login-screen {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(
            circle at center,
            #171717 0%,
            #090909 40%,
            #030303 100%
        );
}

.login-box {
    width: min(430px, calc(100% - 30px));

    padding: 45px 38px;

    background: #0b0b0b;

    border: 1px solid #252525;

    border-radius: 12px;

    text-align: center;

    box-shadow:
        0 0 80px rgba(255,255,255,.025);
}

.logo {
    font-size: 40px;
    font-weight: 900;

    letter-spacing: 7px;

    margin-bottom: 15px;
}

.logo span {
    color: #666;
}

.login-line {
    width: 70px;
    height: 2px;

    margin: 0 auto 30px;

    background: #666;
}

.login-box h1 {
    font-size: 22px;
    margin-bottom: 12px;
}

.login-box p {
    color: #777;
    line-height: 1.6;
    font-size: 14px;
}

.discord-button {
    width: 100%;

    margin-top: 25px;

    padding: 15px;

    border: 0;
    border-radius: 7px;

    background: #5865f2;
    color: white;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .2s;
}

.discord-button:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
}

.discord-icon {
    margin-right: 8px;
}

.login-note {
    margin-top: 18px;

    color: #555;

    font-size: 11px;
    line-height: 1.6;
}

.login-status {
    margin-top: 30px;

    color: #666;

    font-size: 10px;
    letter-spacing: 2px;
}

.login-status span {
    display: inline-block;

    width: 6px;
    height: 6px;

    margin-right: 6px;

    border-radius: 50%;

    background: #777;
}


/* APP */

.app {
    display: flex;
    min-height: 100vh;
}


/* SIDEBAR */

.sidebar {
    width: 245px;

    padding: 25px 15px;

    display: flex;
    flex-direction: column;

    background: #080808;

    border-right: 1px solid #202020;
}

.brand {
    padding: 0 10px;

    font-size: 25px;
    font-weight: 900;

    letter-spacing: 4px;

    margin-bottom: 40px;
}

.brand span {
    color: #666;
}

.menu-title {
    padding: 0 10px;

    margin-bottom: 10px;

    color: #444;

    font-size: 9px;

    letter-spacing: 2px;
}

.nav-btn {
    width: 100%;

    padding: 13px 12px;

    margin-bottom: 5px;

    border: 1px solid transparent;
    border-radius: 6px;

    background: transparent;

    color: #777;

    text-align: left;

    cursor: pointer;

    transition: .15s;
}

.nav-btn span {
    width: 25px;

    display: inline-block;
}

.nav-btn:hover,
.nav-btn.active {
    color: #fff;

    background: #151515;

    border-color: #242424;
}

.sidebar-bottom {
    margin-top: auto;
}

.connection {
    padding: 10px;

    margin-bottom: 10px;

    color: #555;

    font-size: 9px;

    letter-spacing: 1px;
}

.connection span {
    width: 6px;
    height: 6px;

    display: inline-block;

    margin-right: 5px;

    border-radius: 50%;

    background: #777;
}

.logout {
    width: 100%;

    padding: 11px;

    border: 1px solid #222;
    border-radius: 6px;

    background: #0e0e0e;

    color: #777;

    cursor: pointer;
}

.logout:hover {
    color: #fff;
}


/* MAIN */

.main {
    width: 100%;
    max-width: 1400px;

    padding: 30px;

    margin: 0 auto;
}

.topbar {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 30px;
}

.system-label {
    color: #444;

    font-size: 9px;

    letter-spacing: 3px;
}

.topbar h2 {
    margin: 5px 0 0;

    font-size: 27px;
}

.user-area {
    display: flex;

    align-items: center;

    gap: 10px;
}

.avatar {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    border: 1px solid #333;
}

.user-info strong {
    display: block;

    font-size: 13px;
}

.user-info small {
    display: block;

    margin-top: 4px;

    color: #555;

    font-size: 10px;
}


/* PAGE */

.page {
    display: none;
}

.page.active {
    display: block;
}


/* STATS */

.stats {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;

    margin-bottom: 15px;
}

.stat-card {
    padding: 22px;

    background: #0b0b0b;

    border: 1px solid #202020;

    border-radius: 8px;
}

.stat-card small {
    display: block;

    color: #555;

    font-size: 9px;

    letter-spacing: 2px;
}

.stat-card strong {
    display: block;

    margin: 10px 0;

    font-size: 28px;
}

.stat-card span {
    color: #444;

    font-size: 9px;
}


/* PANELS */

.grid-2 {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;
}

.panel {
    padding: 22px;

    background: #0b0b0b;

    border: 1px solid #202020;

    border-radius: 8px;
}

.panel-title {
    margin-bottom: 20px;

    color: #555;

    font-size: 9px;

    letter-spacing: 2px;
}

.status-box {
    display: flex;

    gap: 12px;

    align-items: center;
}

.online-dot {
    width: 9px;
    height: 9px;

    border-radius: 50%;

    background: #888;
}

.status-box strong,
.status-box small {
    display: block;
}

.status-box small {
    margin-top: 5px;

    color: #555;
}

.balance-value {
    margin-top: 30px;

    font-size: 18px;
    font-weight: bold;
}


/* SECTION */

.section-heading {
    margin-bottom: 20px;
}

.section-heading h2 {
    margin: 0 0 7px;
}

.section-heading p {
    margin: 0;

    color: #555;

    font-size: 13px;
}


/* GAMES */

.games-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;
}

.game-card {
    min-height: 145px;

    padding: 22px;

    border: 1px solid #202020;

    border-radius: 8px;

    background: #0b0b0b;

    color: white;

    text-align: left;

    cursor: pointer;

    transition: .2s;
}

.game-card:hover {
    transform: translateY(-3px);

    border-color: #444;

    background: #101010;
}

.game-icon {
    font-size: 28px;

    margin-bottom: 15px;
}

.game-card strong {
    display: block;

    margin-bottom: 7px;
}

.game-card small {
    color: #555;
}


/* MISSIONS */

.mission-list {
    display: grid;
    gap: 10px;
}

.mission {
    display: flex;

    justify-content: space-between;
    align-items: center;

    padding: 20px;

    background: #0b0b0b;

    border: 1px solid #202020;

    border-radius: 8px;
}

.mission strong,
.mission small {
    display: block;
}

.mission small {
    margin-top: 5px;

    color: #555;
}

.mission b {
    color: #aaa;
}


/* LEADERBOARD */

.leaderboard-list {
    background: #0b0b0b;

    border: 1px solid #202020;

    border-radius: 8px;

    overflow: hidden;
}

.leader-row {
    display: flex;

    justify-content: space-between;

    padding: 18px 20px;

    border-bottom: 1px solid #191919;
}

.leader-row:last-child {
    border-bottom: 0;
}

.leader-rank {
    color: #555;
}


/* PROFILE */

.profile-card {
    max-width: 600px;

    padding: 40px;

    background: #0b0b0b;

    border: 1px solid #202020;

    border-radius: 10px;

    text-align: center;
}

.profile-avatar {
    width: 100px;
    height: 100px;

    border-radius: 50%;

    border: 1px solid #333;

    margin-bottom: 15px;
}

.profile-card h2 {
    margin: 0;
}

.profile-card p {
    color: #555;
}

.profile-stats {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10px;

    margin-top: 30px;
}

.profile-stats div {
    padding: 15px;

    background: #080808;

    border: 1px solid #1b1b1b;
}

.profile-stats strong,
.profile-stats small {
    display: block;
}

.profile-stats strong {
    font-size: 20px;
}

.profile-stats small {
    margin-top: 5px;

    color: #555;

    font-size: 9px;
}


/* MOBILE */

@media (max-width: 850px) {

    .sidebar {
        width: 200px;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .games-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-2 {
        grid-template-columns: 1fr;
    }

}

@media (max-width: 600px) {

    .app {
        display: block;
    }

    .sidebar {
        width: 100%;
        min-height: auto;
    }

    .sidebar-bottom {
        margin-top: 15px;
    }

    .main {
        padding: 15px;
    }

    .topbar {
        align-items: flex-start;

        gap: 15px;

        flex-direction: column;
    }

    .stats,
    .games-grid {
        grid-template-columns: 1fr;
    }

}
