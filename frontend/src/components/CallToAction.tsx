import { Container } from './Container'
import backgroundImage from '../assets/images/red.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#d6001c] py-32"
    >
      <img
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Sign up today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Create an account now and find a tutor, or tutor others, or do both!
          </p>
          <button color="white" className="mt-10 bg-white rounded-full p-2.5 hover:bg-gray-300">
            Get started now!
          </button>
        </div>
      </Container>
    </section>
  )
}
