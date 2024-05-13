export interface IMenuItem{
    name:string
    url:string
    icon:string
}
export const GALLERY_DATA : IMenuItem[] = [
{
    icon: 'i-line-md-home-twotone-alt',
    name: 'Home',
    url: '/',

},
{
    icon: 'i-line-md-email',
    name: 'Messages',
    url: '/',

},
{
    icon: 'i-line-md-image',
    name: 'Gallery',
    url: '/',

},
{
    icon: 'i-line-md-bell-loop',
    name: 'Questions',
    url: '/',

},
{
    icon: 'i-line-md-bell-loop',
    name: 'Login',
    url: '/login',

}
]