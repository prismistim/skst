import { createRoute } from 'honox/factory'

export default createRoute((c) => {
	return c.render(
		<div className="h-screen bg-neutral-700 text-neutral-200">
			<div className="mx-auto max-w-[960px] pt-8">
				<div className="flex items-baseline gap-4 border-neutral-600 border-b pb-4">
					<span className="text-3xl">skst</span>
					<span className="text-neutral-500 italic">「透かして」</span>
				</div>
				<div className='mt-4 flex justify-center rounded-md p-4 outline-dotted outline-2 outline-neutral-400'>
					<span className='text-neutral-400 italic'>ここに画像を入れる</span>
				</div>
				<div className="mt-4">
					<div className='font-bold text-2xl'>DSC0001.jpg</div>
					<div class='shadow-black shadow-lg'>
						<img src="/app/assets/sample.jpg" className="mt-4" />
						<div className='flex justify-between bg-black px-4 py-2'>
							<div>
								<div>photo.snowsphere</div>
								<div className="flex flex-wrap gap-x-4">
									<span>2024-01-01 12:34</span>
									<span>38.2222</span>
									<span>145.3333</span>
								</div>
							</div>
							<div className="grid grid-cols-3 gap-x-8">
								<span>Sony ILCE-6000</span>
								<span>E 18-500mm F2.8</span>
								<span>35mm</span>
								<span>1/30s</span>
								<span>f/2.8</span>
								<span>ISO 100</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>,
	)
})
