import { useEffect } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import GroupClasses from '../components/GroupClasses'
import Testimonials from '../components/Testimonials'
import Book from '../components/Book'
import BlogPreview from '../components/BlogPreview'
import Flashcards from '../components/Flashcards'
import ConjugationPractice from '../components/ConjugationPractice'
import BookingForm from '../components/BookingForm'

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <Header />
      <About />
      <GroupClasses />
      <Testimonials />
      <Book />
      <BlogPreview />
      <Flashcards />
      <ConjugationPractice />
      <BookingForm />
    </>
  )
}
