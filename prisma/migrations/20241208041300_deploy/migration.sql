-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `xp` (
    `id` VARCHAR(191) NOT NULL,
    `xpMessages` INTEGER NOT NULL,

    UNIQUE INDEX `xp_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `timeuser` (
    `id` VARCHAR(191) NOT NULL,
    `time` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `timeuser_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `xp` ADD CONSTRAINT `xp_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `timeuser` ADD CONSTRAINT `timeuser_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
