import { React } from 'react';
import styles from "../styles/Home.module.css";

const Navbar = ({ account, connectWallet }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>Voting DAPP</div>
            <div>
                {account ? (
                    <button className={styles.button}>
                        {account.slice(0, 6) + "..." + account.slice(38, 42)}
                    </button>
                ) : (
                    <button className={styles.button} onClick={connectWallet}>
                        Connect Wallet
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar


