import Link from 'next/link';

export default function IndexPage() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href="/messages">Go to messages</Link>
    </>
  );
}
