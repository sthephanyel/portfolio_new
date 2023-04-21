import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Portfolio } from '@/screens/Portfolio'
import { GetServerSideProps } from 'next'
import { AboutMeDocument, AuthorsDocument } from '@/generated/graphql'
import { client, ssrCache } from '@/lib/urql'

export default function Home() {
  return (
    <Portfolio/>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(AuthorsDocument, {}).toPromise();
  await client.query(AboutMeDocument, {}).toPromise();
  return{
      props:{
          urqlState: ssrCache.extractData()
      }
  }
}
