import Image from 'next/image'
import logo from '../../assets/logo/Group.png'

const Logo = () => {
    return <Image style={{width: '100%', heigth: '100%', maxWidth: '290px'}} src={logo} alt='logo' />
}

export default Logo