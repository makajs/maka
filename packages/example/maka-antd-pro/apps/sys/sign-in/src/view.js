export default {
	component: 'div',
	className: 'sign-in',
	autoComplete: 'off',
	children: [{
		className: 'sign-in-header',
		component: 'div',
		children: [{
			component: 'img',
			className: 'sign-in-header-logo',
			src: '{{$image.logo}}'
		}, 'Application', {
			component: 'LocaleSelector',
			style: {
				float: 'right',
				marginRight: 20,
				lineHeight: '58px',
				cursor:'pointer'
			}
		}]
	}, {
		className: 'sign-in-content',
		component: 'div',
		children: [{
			component: 'antd.Form',
			className: 'sign-in-content-form',
			children: [{
				component: 'antd.Form.Item',
				className: 'sign-in-content-form-title',
				style: { fontSize: 30 },
				children: `{{$i18n('sign-in')}}`
			}, {
				component: 'antd.Form.Item',
				validateStatus: "{{data.other.error.user?'error':'success'}}",
				help: '{{$i18n(data.other.error.user)}}',
				className: 'sign-in-content-form-user',
				children: [{
					component: 'antd.Input',
					placeholder: `{{$i18n('sign-in.user')}}`,
					onChange: "{{(e)=>$fieldChange('data.form.user', e.target.value)}}",
					value: '{{data.form.user}}',
					prefix: {
						component: 'antd.Icon',
						type: 'user',
					}
				}]
			}, {
				component: 'antd.Form.Item',
				validateStatus: "{{data.other.error.password?'error':'success'}}",
				help: '{{$i18n(data.other.error.password)}}',
				className: 'sign-in-content-form-password',
				children: [{
					component: 'antd.Input',
					placeholder:`{{$i18n('sign-in.password')}}`,
					autoComplete: 'new-password',
					type: 'password',
					onChange: `{{(e)=>$fieldChange('data.form.password', e.target.value)}}`,
					value: '{{data.form.password}}',
					prefix: {
						component: 'antd.Icon',
						type: 'lock',
					}
				}]
			}, {
				component: 'antd.Form.Item',
				className: 'sign-in-content-form-forget',
				children: [{
					component: 'antd.Checkbox',
					children: `{{$i18n('sign-in.remember-me')}}`,
					checked: '{{data.form.remember}}',
					onChange: `{{(e)=>$base.setState({'data.form.remember':e.target.checked})}}`
				}, {
					component: 'a',
					style: { float: 'right' },
					onClick: `{{()=>$redirect('/forgot')}}`,
					children: `{{$i18n('sign-in.forgot-password')}}`
				}]
			}, {
				component: 'antd.Form.Item',
				className: 'sign-in-content-form-login',
				children: [{
					component: 'antd.Button',
					type: 'primary',
					children: `{{$i18n('sign-in')}}`,
					onClick: '{{$login}}'
				}]
			}, {
				component: 'antd.Form.Item',
				className: 'sign-in-content-form-register',
				children: [{
					component: 'a',
					style: { float: 'right' },
					onClick: `{{()=>$redirect('/sign-up')}}`,
					children: `{{$i18n('sign-in.signup')}}`
				}]
			}]
		}]
	}, {
		className: 'sign-in-footer',
		component: 'div',
		children: 'copyright © 2018 zlj'
	}],
}


