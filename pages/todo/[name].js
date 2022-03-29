import { useRouter } from 'next/router'

export default function todo () {
    const router = useRouter();
    const {name} = router.query;
    return (
        <div>
            <h1>{name}'s TODO'S</h1>
            <ul>
                <li>Registry</li>
                <li>HoneyFund</li>
                <li>Landing page with countdown</li>
            </ul>
        </div>
    )
}