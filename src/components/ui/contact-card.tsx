import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-[#0A0C0F]/15 backdrop-blur-[6px] border border-[#C0B89A]/12 relative grid h-full w-full shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[12px] md:rounded-[16px] overflow-hidden',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-2 -left-2 md:-top-3 md:-left-3 h-4 w-4 md:h-6 md:w-6 text-[#C0B89A]" />
			<PlusIcon className="absolute -top-2 -right-2 md:-top-3 md:-right-3 h-4 w-4 md:h-6 md:w-6 text-[#C0B89A]" />
			<PlusIcon className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 h-4 w-4 md:h-6 md:w-6 text-[#C0B89A]" />
			<PlusIcon className="absolute -right-2 -bottom-2 md:-right-3 md:-bottom-3 h-4 w-4 md:h-6 md:w-6 text-[#C0B89A]" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-3 sm:space-y-4 px-4 py-8 sm:px-6 sm:py-10 md:p-10 lg:p-14">
					<h1 className="text-4xl sm:text-5xl md:text-5xl font-bebas lg:text-7xl tracking-widest bg-gradient-to-r from-[#E8E0CE] via-[#C0B89A] to-[#8C7B5E] bg-clip-text text-transparent"
						style={{ 
							filter: "drop-shadow(0 0 15px rgba(192,184,154,0.8)) drop-shadow(0 0 30px rgba(192,184,154,0.5)) drop-shadow(0 0 60px rgba(192,184,154,0.3))"
						}}>
						{title}
					</h1>
					<p className="text-[#C0B89A]/80 max-w-xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
						{description}
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-[#0A0C0F]/15 flex h-full w-full items-center border-t p-4 sm:p-6 md:p-8 lg:p-10 md:col-span-1 md:border-t-0 md:border-l border-[#C0B89A]/10 backdrop-blur-[6px]',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-3 sm:gap-4 py-3 sm:py-4 group', className)} {...props}>
			<div className="bg-[#C0B89A]/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-[#C0B89A] border border-[#C0B89A]/20 transition-all duration-300 flex-shrink-0">
				<Icon className="h-5 w-5 sm:h-6 sm:w-6" />
			</div>
			<div className="min-w-0">
				<p className="font-bebas text-base sm:text-lg tracking-wider text-[#C0B89A]">{label}</p>
				<p className="text-[#E8E0CE]/90 text-xs sm:text-sm font-medium break-words">{value}</p>
			</div>
		</div>
	);
}
