'use client';
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { useUserService } from '_services';
import Grid from '_components/base/Grid';
import Image from '_components/base/Image';
import LinkButton from '_components/base/LinkButton';
import TextInput from '_components/base/TextInput';
import Button from '_components/base/Button';
import { useSearchParams } from 'next/navigation';

const isEmail = (str: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
}

const LoginForm = ({loginKey}: {loginKey?: string | null}) => {

    const [inProgress, setInProgress] = useState<boolean>(false)

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const [error, setError] = useState<boolean>()

    const userService = useUserService();

    const onLogin = async (username: string | undefined, password: string | undefined) => {

        setInProgress(true)

        if (!username || !password) {
            setError(true)
            return
        }

        setError(false)

        try {
            await userService.login(username, password)
            setInProgress(false)
        } catch(e) {
            console.log('ttp',e)
            setError(true)
        }
    }

    useEffect(() => {
        if (!loginKey) return
        const keyParts = loginKey?.split(':')
        onLogin(keyParts[0], keyParts[1])
    }, [loginKey])

    return (
        <div className='flex flex-col justify-center gap-10'>
            <div className='flex flex-col justify-center gap-4'>
                <div className='flex flex-col justify-center'>
                    <div className='text-xl'>
                        <TextInput eng placeholder='כתובת הדוא״ל שלך' onChange={(value: string) => setUsername(value)}/>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-xl'>
                        <TextInput password placeholder='סיסמה' onChange={(value: string) => setPassword(value)}/>
                    </div>
                </div>
                { error && (
                    <div>
                        <span>
                            כתובת הדוא״ל או הסיסמה אינם נכונים. אנא בדקו את הפרטים ונסו שנית.
                        </span>
                    </div>
                )}
            </div>
            <div className='flex justify-center'>
                <Button processing={inProgress} icon={'/icons/arrow-circle.svg'} onClick={() => onLogin(username, password)} disabled={(!username || !isEmail(username)) || !password}>
                    התחברות
                </Button>
            </div>
        </div>
    )
}

const Welcome = ({onEnter}: {onEnter: any}) => {
    return (
        <div>
            <div className='flex justify-center flex-col gap-10'>
                <div className='flex justify-center flex-col gap-8'>
                    <div className='flex justify-center'>
                        <span className='text-center text-7xl font-extralight tracking-wide'>
                            Imagine
                        </span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-center text-lg font-light max-w-[250px]'>
                            מרחב ליצירת תכני לימוד מרהיבים באמצעות בינה מלאכותית, בעברית.
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center text-lg'>
                        <LinkButton underline onClick={onEnter}>
                            התחברו
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LoginPage = () => {

    const searchParams = useSearchParams();
    const loginKey = searchParams.get('key')

    const [showLoginForm, setShowLoginForm] = useState(false)

    useEffect(() => {
        loginKey && setShowLoginForm(true)
    })
    
    return (
        <div className='h-screen w-screen' dir='rtl' lang='he'>
            <Grid className='h-full w-full'>
                <div className='col-start-1 col-span-6 h-full pt-[15%] flex flex-col gap-32'>
                    <div className='flex justify-center'>
                        <img src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1711545138/logo-black_a4gdvl.png" className='w-[80px]'/>
                    </div>
                    <div className='flex flex-col gap-20'>
                        <div className='flex flex-col justify-start items-center gap-12'>
                            <div className='flex justify-center'>
                                <img className="w-[100px]" src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1711029426/0_2_1_1_ziundv.png"/>
                            </div>
                            <div className='relative w-full'>
                                <div className={`w-full absolute top-0 left-0 right-0 mx-auto ${showLoginForm ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                                    <Welcome onEnter={() => setShowLoginForm(true)}/>
                                </div>
                                <div className={`max-w-[450px] absolute top-0 left-0 right-0 mx-auto ${showLoginForm ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                                    <LoginForm loginKey={loginKey}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-start-7 col-span-6'>
                    <Image className="w-full h-full" src={'https://cdn.midjourney.com/a588f008-a4d2-4ff2-849b-35b55d243af3/0_0.webp'}/>
                </div>
            </Grid>
        </div>
    )
}

const LoginFallback = () => {
  return <>placeholder</>
}

const Login = () => {
    return (
        <Suspense fallback={<LoginFallback />}>
            <LoginPage/>
        </Suspense>
    )
}


export default Login;


/*

<div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input {...fields.username} type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input {...fields.password} type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                            Login
                        </button>
                        <Link href="/account/register" className="btn btn-link">Register</Link>
                    </form>
                </div>
            </div>

*/