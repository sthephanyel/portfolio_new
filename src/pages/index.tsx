import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Portfolio } from '@/screens/Portfolio'
import { GetServerSideProps, GetStaticProps } from 'next'
import { AboutMeDocument, AuthorsDocument, CompanyDocument, SkillsDocument } from '@/generated/graphql'
import { client, ssrCache } from '@/lib/urql'

export default function Home() {
  return (
    <>
    <Head>
      <meta charSet='utf-8'/>
      <link rel='icon' type='image/png' sizes='32x32' href='./logo.jpeg'/>
    </Head>
      <Portfolio/>
    </>
    
  )
}
// roda as informações necessárias pelo ServerSide
export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(AuthorsDocument, {}).toPromise();
  await client.query(AboutMeDocument, {}).toPromise();
  await client.query(SkillsDocument, {}).toPromise();
  await client.query(CompanyDocument, {}).toPromise();

  return{
      props:{
          urqlState: ssrCache.extractData()
      }
  }
}